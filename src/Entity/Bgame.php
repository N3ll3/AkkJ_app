<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\BgameRepository")
 */
class Bgame
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="text")
     */
    private $description;

    /**
     * @ORM\Column(type="integer")
     */
    private $duration;

    /**
     * @ORM\Column(type="integer")
     */
    private $minNbPlayers;

    /**
     * @ORM\Column(type="integer")
     */
    private $maxNbPlayers;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Difficulty", inversedBy="bgames")
     * @ORM\JoinColumn(nullable=false)
     */
    private $difficulty;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Mechanism", inversedBy="bgames")
     */
    private $mechanism;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Category", inversedBy="bgames")
     */
    private $category;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Player", inversedBy="bgames")
     */
    private $player;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $image;

    public function __construct()
    {
        $this->mechanism = new ArrayCollection();
        $this->category = new ArrayCollection();
        $this->player = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getDuration(): ?int
    {
        return $this->duration;
    }

    public function setDuration(int $duration): self
    {
        $this->duration = $duration;

        return $this;
    }

    public function getMinNbPlayers(): ?int
    {
        return $this->minNbPlayers;
    }

    public function setMinNbPlayers(int $minNbPlayers): self
    {
        $this->minNbPlayers = $minNbPlayers;

        return $this;
    }

    public function getMaxNbPlayers(): ?int
    {
        return $this->maxNbPlayers;
    }

    public function setMaxNbPlayers(int $maxNbPlayers): self
    {
        $this->maxNbPlayers = $maxNbPlayers;

        return $this;
    }

    public function getDifficulty(): ?difficulty
    {
        return $this->difficulty;
    }

    public function setDifficulty(?difficulty $difficulty): self
    {
        $this->difficulty = $difficulty;

        return $this;
    }


    /**
     * @return Collection|mechanism[]
     */
    public function getMechanism(): Collection
    {
        return $this->mechanism;
    }

    public function addMechanism(mechanism $mechanism): self
    {
        if (!$this->mechanism->contains($mechanism)) {
            $this->mechanism[] = $mechanism;
        }

        return $this;
    }

    public function removeMechanism(mechanism $mechanism): self
    {
        if ($this->mechanism->contains($mechanism)) {
            $this->mechanism->removeElement($mechanism);
        }

        return $this;
    }

    /**
     * @return Collection|category[]
     */
    public function getCategory(): Collection
    {
        return $this->category;
    }

    public function addCategory(category $category): self
    {
        if (!$this->category->contains($category)) {
            $this->category[] = $category;
        }

        return $this;
    }

    public function removeCategory(category $category): self
    {
        if ($this->category->contains($category)) {
            $this->category->removeElement($category);
        }

        return $this;
    }

    /**
     * @return Collection|player[]
     */
    public function getPlayer(): Collection
    {
        return $this->player;
    }

    public function addPlayer(player $player): self
    {
        if (!$this->player->contains($player)) {
            $this->player[] = $player;
        }

        return $this;
    }

    public function removePlayer(player $player): self
    {
        if ($this->player->contains($player)) {
            $this->player->removeElement($player);
        }

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): self
    {
        $this->image = $image;

        return $this;
    }
}
