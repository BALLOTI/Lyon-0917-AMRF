<?php

namespace AppBundle\Repository;

/**
 * UserRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class UserRepository extends \Doctrine\ORM\EntityRepository
{

	public function findByEmail($email)
	{
		return $this->createQueryBuilder('u')
			->setParameter("email", $email)
			->where('u.email = :email')
			->getQuery()
			->getResult();
	}

	public function findById($id)
	{
		return $this->createQueryBuilder('u')
			->setParameter('id', $id)
			->where('u.id = :id')
			->getQuery()
			->getResult();
	}

    public function UpdateLastLogin(){

    }


}
