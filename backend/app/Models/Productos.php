<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Productos extends Model
{
    use HasFactory;

    protected $table = "productos";

    protected $fillable = [
      'nombre',
      'precio',
      'cantidad',
      'imagen',
      'imagen64',
      'observaciones',
      'c1',
      'c2',
      'c3',
      'c4',
      'c5',
      'c6',

    ];
 
}