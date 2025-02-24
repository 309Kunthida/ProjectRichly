<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index(Request $request)
    {
        $type = $request->query('type'); // รับค่าจาก query string
        $categories = Category::where('type', $type)->get(); // กรองตาม type

        return response()->json($categories);
    }

}
