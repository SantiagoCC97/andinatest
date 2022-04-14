<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

Use App\Models\Productos;
Use Log;

class ProductosController extends Controller
{

    public function getAll(){
      $data = Productos::get();
      return response()->json($data, 200);
    }

    public function create(Request $request){

        

      $data['nombre'] = $request['nombre'];
      $data['precio'] = $request['precio'];
      $data['cantidad'] = $request['cantidad'];
      $data['imagen'] = $request['imagen'];
      $data['imagen64'] = $request['imagen64'];
      $data['observaciones'] = $request['observaciones'];
      $data['c1'] = $request['c1'];
      $data['c2'] = $request['c2'];
      $data['c3'] = $request['c3'];
      $data['c4'] = $request['c4'];
      $data['c5'] = $request['c5'];
      $data['c6'] = $request['c6'];


      Productos::create($data);
      return response()->json([
          'message' => "Successfully created",
          'success' => true
      ], 200);
    }

    public function delete($id){
      $res = Productos::find($id)->delete();
      return response()->json([
          'message' => "Successfully deleted",
          'success' => true
      ], 200);
    }

    public function get($id){
      $data = Productos::find($id);
      return response()->json($data, 200);
    }

    public function update(Request $request,$id){

      $data['nombre'] = $request['nombre'];
      $data['precio'] = $request['precio'];
      $data['cantidad'] = $request['cantidad'];
      $data['imagen'] = $request['imagen'];
      $data['imagen64'] = $request['imagen64'];
      $data['observaciones'] = $request['observaciones'];
      $data['c1'] = $request['c1'];
      $data['c2'] = $request['c2'];
      $data['c3'] = $request['c3'];
      $data['c4'] = $request['c4'];
      $data['c5'] = $request['c5'];
      $data['c6'] = $request['c6'];
      Productos::find($id)->update($data);
      return response()->json([
          'message' => "Successfully updated",
          'success' => true
      ], 200);
    }
}