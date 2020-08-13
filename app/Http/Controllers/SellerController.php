<?php

namespace App\Http\Controllers;

use App\Repository\SellerInterface;
use Illuminate\Http\Request;

class SellerController extends Controller
{

    protected $sellerRepo;

    public function __construct(SellerInterface $seller)
    {
        $this->sellerRepo = $seller;
    }

    public function index()
    {
        return $this->sellerRepo->getAll();
    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        $this->sellerRepo->create($request->all());
        return response()->json('successfully added!');
    }


    public function show($id)
    {
        //
    }


    public function edit($id)
    {
        return $this->sellerRepo->findById($id);
    }


    public function update(Request $request, $id)
    {
        $this->sellerRepo->update($id, $request->all());

        return response()->json('successfully updated');
    }


    public function destroy($id)
    {
        $this->sellerRepo->delete($id);

        return response()->json('successfully deleted');
    }
}
