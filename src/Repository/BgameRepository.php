<?php

namespace App\Repository;

use App\Entity\Bgame;
use App\Entity\Filter;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Doctrine\Common\Collections\Criteria;


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
                ->andWhere(':id_Mechanism MEMBER OF b.mechanism')
                ->setParameter('id_Mechanism', $filter->getMechanism());
        }

        if ($filter->getCategory()) {
            $query = $query
                ->andWhere(':id_category MEMBER OF b.category')
                ->setParameter('id_category', $filter->getCategory());
        }
        dump($query);

        return $query->getQuery()
            ->getResult();
    }
}
