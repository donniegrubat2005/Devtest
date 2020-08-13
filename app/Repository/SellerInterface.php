<?php

namespace App\Repository;

interface SellerInterface
{

    public function getAll();
    public function create(array $attributes);
    public function findById($id);
    public function update($id, array $attributes);
    public function delete($id);
}
