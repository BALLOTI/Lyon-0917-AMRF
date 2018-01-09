<?php

namespace AppBundle\Repository;

/**
 * CompanyRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class CompanyRepository extends \Doctrine\ORM\EntityRepository
{
    const CHAMPS = ["name"];


    public function findByTextPertinence($texts, $champs)
    {
        $results = [];
        $texts = explode(' ', $texts);
        $qb = $this->createQueryBuilder('p');
        foreach ($texts as $text) {
            if (strlen($text) > 2) {
                $qb->select('p.id');
                $qb->setParameter('text', '%' . $text . '%');
                foreach ($champs as $champ) {
                    $qb->where("p.$champ LIKE :text");
                    $query = $qb->getQuery();
                    $results[count($results) + 1] = $query->getResult();
                    if (empty ($results[count($results)])) {
                        unset($results[count($results)]);
                    }
                }
            }
        }
        return $results;
    }

    public function findByActivityPertinence($themas)
    {
        $results = "";
        foreach ($themas as $thema) {

            $sql = " SELECT id FROM company_activity WHERE themes = $thema";
            $em = $this->getEntityManager();
            $stmt = $em->getConnection()->prepare($sql);
            $stmt->execute();
            $results =  $stmt->fetchAll();

        }
        $cleanResult = "";
        foreach ($results as $key => $project) {
            $i = 0;
            $cleanResult[$i] = [];
            foreach ($project as $id) {
                array_push($cleanResult[$i], ['id' => $id]);
            }
            $i++;
        }

        return $cleanResult;
    }

	public function companyById($idCompany)
	{
		return $this->createQueryBuilder('c')
			->setParameter('id', $idCompany)
			->where('c.id = :id')
			->getQuery()
			->getResult();
	}

}