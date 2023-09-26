<?php

namespace App\Entity;

use App\Repository\QuoteRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: QuoteRepository::class)]
class Quote
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'quotes')]
    private ?User $customer = null;

    #[ORM\Column(nullable: true)]
    private ?float $tva = null;

    #[ORM\Column(nullable: true)]
    private ?float $totalHt = null;

    #[ORM\Column(nullable: true)]
    private ?float $totalTtc = null;

    #[ORM\OneToMany(mappedBy: 'quote', targetEntity: QuoteDetails::class)]
    private Collection $quoteDetails;

    public function __construct()
    {
        $this->quoteDetails = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCustomer(): ?User
    {
        return $this->customer;
    }

    public function setCustomer(?User $customer): static
    {
        $this->customer = $customer;

        return $this;
    }

    public function getTva(): ?float
    {
        return $this->tva;
    }

    public function setTva(?float $tva): static
    {
        $this->tva = $tva;

        return $this;
    }

    public function getTotalHt(): ?float
    {
        return $this->totalHt;
    }

    public function setTotalHt(?float $totalHt): static
    {
        $this->totalHt = $totalHt;

        return $this;
    }

    public function getTotalTtc(): ?float
    {
        return $this->totalTtc;
    }

    public function setTotalTtc(?float $totalTtc): static
    {
        $this->totalTtc = $totalTtc;

        return $this;
    }

    /**
     * @return Collection<int, QuoteDetails>
     */
    public function getQuoteDetails(): Collection
    {
        return $this->quoteDetails;
    }

    public function addQuoteDetail(QuoteDetails $quoteDetail): static
    {
        if (!$this->quoteDetails->contains($quoteDetail)) {
            $this->quoteDetails->add($quoteDetail);
            $quoteDetail->setQuote($this);
        }

        return $this;
    }

    public function removeQuoteDetail(QuoteDetails $quoteDetail): static
    {
        if ($this->quoteDetails->removeElement($quoteDetail)) {
            // set the owning side to null (unless already changed)
            if ($quoteDetail->getQuote() === $this) {
                $quoteDetail->setQuote(null);
            }
        }

        return $this;
    }
}
