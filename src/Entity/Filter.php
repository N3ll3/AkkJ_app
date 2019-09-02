<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

class Filter
{

    /**
     * 
     *
     * @var int|null
     */
    private $maxDuration;

    /**
     * 
     *
     * @var int|null
     */
    private $minPlayers;

    /**
     * 
     *
     * @var int|null
     */
    private $maxPlayers;

    /**
     * 
     *
     * @var string|null
     */
    private $difficulty;

    /**
     * 
     *
     * @var Collection|null
     */
    private $category;

    /**
     * 
     *
     * @var Collection|null
     */
    private $mechanism;



    /**
     * Get the value of maxDuration
     *
     * @return  int|null
     */
    public function getMaxDuration()
    {
        return $this->maxDuration;
    }

    /**
     * Set the value of maxDuration
     *
     * @param  int|null  $maxDuration
     *
     * @return  self
     */
    public function setMaxDuration($maxDuration)
    {
        $this->maxDuration = $maxDuration;

        return $this;
    }
    /**
     * Get the value of minPlayers
     *
     * @return  int|null
     */
    public function getMinPlayers(): ?int
    {
        return $this->minPlayers;
    }

    /**
     * Set the value of minPlayers
     *
     * @param  int|null  $minPlayers
     *
     * @return  self
     */
    public function setMinPlayers($minPlayers): Filter
    {
        $this->minPlayers = $minPlayers;

        return $this;
    }

    /**
     * Get the value of maxPlayers
     *
     * @return  int|null
     */
    public function getMaxPlayers(): ?int
    {
        return $this->maxPlayers;
    }

    /**
     * Set the value of maxPlayers
     *
     * @param  int|null  $maxPlayers
     *
     * @return  self
     */
    public function setMaxPlayers($maxPlayers): Filter
    {
        $this->maxPlayers = $maxPlayers;

        return $this;
    }

    /**
     * Get the value of difficulty
     *
     * @return  string|null
     */
    public function getDifficulty(): ?string
    {
        return $this->difficulty;
    }

    /**
     * Set the value of difficulty
     *
     * @param  string|null  $difficulty
     *
     * @return  self
     */
    public function setDifficulty($difficulty): Filter
    {
        $this->difficulty = $difficulty;

        return $this;
    }

    /**
     * Get the value of category
     *
     * @return  Collection|null
     */
    public function getCategory(): ?Collection
    {
        return $this->category;
    }

    /**
     * Set the value of category
     *
     * @param  Collection|null  $category
     *
     * @return  self
     */
    public function setCategory($category)
    {
        $this->category = $category;

        return $this;
    }

    /**
     * Get the value of mechanism
     *
     * @return  Collection|null
     */
    public function getMechanism(): ?Collection
    {
        return $this->mechanism;
    }

    /**
     * Set the value of mechanism
     *
     * @param  Collection|null  $mechanism
     *
     * @return  self
     */
    public function setMechanism($mechanism)
    {
        $this->mechanism = $mechanism;

        return $this;
    }
}
