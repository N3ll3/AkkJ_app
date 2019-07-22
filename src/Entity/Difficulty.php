<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\DifficultyRepository")
 */
class Difficulty
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
     * @ORM\OneToMany(targetEntity="App\Entity\Bgame", mappedBy="difficulty")
     */
    private $bgames;

    public function __construct()
    {
        $this->bgames = new ArrayCollection();
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

    /**
     * @return Collection|Bgame[]
     */
    public function getBgames(): Collection
    {
        return $this->bgames;
    }

    public function addBgame(Bgame $bgame): self
    {
        if (!$this->bgames->contains($bgame)) {
            $this->bgames[] = $bgame;
            $bgame->setDifficulty($this);
        }

        return $this;
    }

    public function removeBgame(Bgame $bgame): self
    {
        if ($this->bgames->contains($bgame)) {
            $this->bgames->removeElement($bgame);
            // set the owning side to null (unless already changed)
            if ($bgame->getDifficulty() === $this) {
                $bgame->setDifficulty(null);
            }
        }

        return $this;
    }
}
