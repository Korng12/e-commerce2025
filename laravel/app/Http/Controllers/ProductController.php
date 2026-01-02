<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{

    public function getProducts(){
        
        return ["message"=>"This is products"];
    }
    public function activeProducts(){
        $product=Product::where('active',1)
                          ->orderBy('name')
                          ->take(10)
                          ->get();
        return ["data"=>$product];
    }
    public function expensiveProducts(){
        $products=Product::where('price','>',2000)->first();
        return response()->json($products);
    }
    public function findById($productId){
        $product=Product::find($productId);
        return response()->json($product);
    }
    public function activeproduct(){
        $product=Product::where('active',1)->first();
        return response()->json($product);
    }
    public function createProduct(Request $request){
        $product=new Product();
        $product->name=$request->name;
        $product->price=$request->price;
        $product->category_id=$request->category_id;
        $product->active=1;
        $product->save();
        return response()->json($product);
    }
}
