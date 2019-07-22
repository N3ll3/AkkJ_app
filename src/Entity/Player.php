<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PlayerRepository")
 */
class Player
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
    private $username;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $password;

    /**
     * @ORM\Column(type="integer")
     */
    private $access;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Bgame", mappedBy="player")
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

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getAccess(): ?int
    {
        return $this->access;
    }

    public function setAccess(int $access): self
    {
        $this->access = $access;

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
            $bgame->addPlayer($this);
        }

        return $this;
    }

    public function removeBgame(Bgame $bgame): self
    {
        if ($this->bgames->contains($bgame)) {
            $this->bgames->removeElement($bgame);
            $bgame->removePlayer($this);
        }

        return $this;
    }
}
