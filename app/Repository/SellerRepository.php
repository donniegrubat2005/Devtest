<?php

namespace App\Repository;

use App\Seller;

class SellerRepository implements SellerInterface
{
    protected $sellerRepo;

    public function __construct(Seller $seller)
    {
        $this->sellerRepo = $seller;
    }

    public function getAll()
    {
        return $this->sellerRepo->all();
    }

    public function findById($id)
    {
        return $this->sellerRepo->findOrFail($id);
    }


    public function create(array $attributes)
    {
        return $this->sellerRepo->create($attributes);
    }

    public function update($id, array $attributes)
    {
        return $this->sellerRepo->findOrFail($id)->update($attributes);
    }

    public function delete($id)
    {
        return $this->sellerRepo->destroy($id);
    }
}
