<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

class Filter
{

    /**
     * 
     *
     * @var string|null
     */
    private $name;

    /**
     * 
     *
     * @var int|null
     */
    private $duration;

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
     * @var string|null
     */
    private $category;

    /**
     * 
     *
     * @var string|null
     */
    private $mechanism;



    public function __construct()
    {
        $this->mechanism = new ArrayCollection();
        $this->category = new ArrayCollection();
    }




    /**
     * Get the value of name
     *
     * @return  string|null
     */
    public function getName(): ?string
    {
        return $this->name;
    }

    /**
     * Set the value of name
     *
     * @param  string|null  $name
     *
     * @return  self
     */
    public function setName($name): Filter
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get the value of duration
     *
     * @return  int|null
     */
    public function getDuration(): ?int
    {
        return $this->duration;
    }

    /**
     * Set the value of duration
     *
     * @param  int|null  $duration
     *
     * @return  self
     */
    public function setDuration($duration): Filter
    {
        $this->duration = $duration;

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
     * @return  @return Collection|category[]|null
     */
    public function getCategory(): ?Collection
    {
        return $this->category;
    }

    /**
     * Set the value of category
     *
     * @param  string|null  $category
     *
     * @return  self
     */
    public function setCategory($category): Filter
    {
        if (!$this->category->contains($category)) {
            $this->category[] = $category;
        }

        return $this;
    }

    /**
     * Get the value of mechanism
     *
     * @return  Collection|mechanism[]|null
     */
    public function getMechanism(): ?Collection
    {
        return $this->mechanism;
    }

    /**
     * Set the value of mechanism
     *
     * @param  string|null  $mechanism
     *
     * @return  self
     */
    public function setMechanism($mechanism): Filter
    {
        if (!$this->mechanism->contains($mechanism)) {
            $this->mechanism[] = $mechanism;
        }

        return $this;
    }
}
