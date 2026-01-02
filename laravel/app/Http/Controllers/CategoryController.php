<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CategoryController extends Controller
{
    //
    public function getCategories(){
        return ["message"=>"get categories"];
    }
    public function createCategory(){
        return ["message"=>"create category"];
    }
    public function getCategory($categoryId){
        return ["message"=>"get category ".$categoryId];
    }
    public function updateCategory($categoryId){
        return ["message"=>"update category ".$categoryId];
    }
    public function deleteCategory($categoryId){
        return ["message"=>"delete category ".$categoryId];
    }
}
