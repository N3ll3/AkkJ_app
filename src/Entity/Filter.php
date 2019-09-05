<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

class Filter
{

  
    private $maxDuration;
   
    private $nbPlayers;

    private $difficulty;

    private $category;

    private $mechanism;



  
    public function getMaxDuration()
    {
        return $this->maxDuration;
    }


    public function setMaxDuration($maxDuration)
    {
        $this->maxDuration = $maxDuration;

        return $this;
    }
 
    public function getNbPlayers()
    {
        return $this->nbPlayers;
    }

    public function setNbPlayers($nbPlayers)
    {
        $this->nbPlayers = $nbPlayers;

        return $this;
    }

    public function getDifficulty()
    {
        return $this->difficulty;
    }

    public function setDifficulty($difficulty)
    {
        $this->difficulty = $difficulty;

        return $this;
    }

    public function getCategory()
    {
        return $this->category;
    }

    public function setCategory($category)
    {
        $this->category = $category;

        return $this;
    }

    public function getMechanism()
    {
        return $this->mechanism;
    }

    public function setMechanism($mechanism)
    {
        $this->mechanism = $mechanism;

        return $this;
    }
}
