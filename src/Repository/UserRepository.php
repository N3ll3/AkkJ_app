<?php

namespace App\Repository;

use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
    }


    public function findAllUsers()
    {
        $query = $this->createQueryBuilder('u');
        $query->orderBy('u.roles', 'DESC');

        return $query->getQuery()
            ->getResult();
    }


    public function deleteUser($user_id)
    {
        $query = $this->createQueryBuilder('u');
        $query->delete()
            ->where('u.id = :user_id')
            ->setParameter('user_id', $user_id);

        return $query->getQuery()
            ->getResult();
    }
}
