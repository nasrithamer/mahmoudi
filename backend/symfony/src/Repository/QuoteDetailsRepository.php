<?php

namespace App\Repository;

use App\Entity\QuoteDetails;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<QuoteDetails>
 *
 * @method QuoteDetails|null find($id, $lockMode = null, $lockVersion = null)
 * @method QuoteDetails|null findOneBy(array $criteria, array $orderBy = null)
 * @method QuoteDetails[]    findAll()
 * @method QuoteDetails[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class QuoteDetailsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, QuoteDetails::class);
    }

//    /**
//     * @return QuoteDetails[] Returns an array of QuoteDetails objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('q')
//            ->andWhere('q.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('q.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?QuoteDetails
//    {
//        return $this->createQueryBuilder('q')
//            ->andWhere('q.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
