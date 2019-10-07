<?php

namespace App\Repository;

use App\Entity\Bgame;
use App\Entity\Filter;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Doctrine\ORM\Tools\Pagination\Paginator;




/**
 * @method Bgame|null find($id, $lockMode = null, $lockVersion = null)
 * @method Bgame|null findOneBy(array $criteria, array $orderBy = null)
 * @method Bgame[]    findAll()
 * @method Bgame[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BgameRepository extends ServiceEntityRepository
{

    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Bgame::class);
    }


    /**
     * @return Bgame[] Returns an array of Bgame objects
     */

    public function findBgameByFilter(Filter $filter)
    {

        $query = $this->createQueryBuilder('b');

        if ($filter->getMaxDuration()) {
            $query = $query
                ->andWhere('b.duration <= :duration')
                ->setParameter('duration', $filter->getMaxDuration());
        }
        if ($filter->getNbPlayers()) {
            $query = $query
                ->andWhere('b.minNbPlayers <= :nbPlayers')
                ->andWhere('b.maxNbPlayers >= :nbPlayers')
                ->setParameter('nbPlayers', $filter->getNbPlayers());
        }
        if ($filter->getDifficulty()) {
            $query = $query
                ->andWhere('b.difficulty = :difficulty')
                ->setParameter('difficulty', $filter->getDifficulty());
        }

        if ($filter->getMechanism()) {
            $query = $query
                ->andWhere(':id_mechanism MEMBER OF b.mechanism')
                ->setParameter('id_mechanism', $filter->getMechanism());
        }

        if ($filter->getCategory()) {
            $query = $query
                ->andWhere(':id_category MEMBER OF b.category')
                ->setParameter('id_category', $filter->getCategory());
        }

        return $query->getQuery()
            ->getResult();
    }


    /**
     * deleteBgame
     *
     * @param  mixed $bgame_id
     *
     * @return void
     */
    public function deleteBgame($bgame_id)
    {
        $query = $this->createQueryBuilder('b');
        $query->delete()
            ->where('b.id = :bgame_id')
            ->setParameter('bgame_id', $bgame_id);

        return $query->getQuery()
            ->getResult();
    }

    /**
     * deleteImagePerso
     *
     * @param  mixed $bgame_id
     *
     * @return void
     */
    public function deleteImagePerso($bgame_id)
    {
        $query = $this->createQueryBuilder('b');
        $query->update()
            ->set('b.image_perso', '?1')
            ->where('b.id = ?2')
            ->setParameter(1, null)
            ->setParameter(2, $bgame_id);

        return $query->getQuery()
            ->getResult();
    }

    public function findTenBgame($page, $bgamePerPage)
    {

        $qb = $this->createQueryBuilder('b');
        // $qb->addselect($qb->expr()->substring('b.description', 0, 200))
        $qb->orderBy('b.name', 'ASC');

        $query = $qb->getQuery();

        $firstResult = ($page - 1) * $bgamePerPage;
        $query->setFirstResult($firstResult)->setMaxResults($bgamePerPage);
        $paginator = new Paginator($query);
      

        if (($paginator->count() <= $firstResult) && $page != 1) {
            throw new NotFoundHttpException('Page does not exist'); // page 404, sauf pour la première page
        }

        return $paginator;
    }
}
