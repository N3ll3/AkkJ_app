<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\MechanismRepository")
 */
class Mechanism
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
     * @ORM\ManyToMany(targetEntity="App\Entity\Bgame", mappedBy="mechanism")
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
            $bgame->addMechanism($this);
        }

        return $this;
    }

    public function removeBgame(Bgame $bgame): self
    {
        if ($this->bgames->contains($bgame)) {
            $this->bgames->removeElement($bgame);
            $bgame->removeMechanism($this);
        }

        return $this;
    }
}
