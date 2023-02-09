<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vinho extends Model
{
    use HasFactory;

    protected $fillable = ['nome', 'descricao', 'valor']; // Tem que adicionar as tabelas todas as tabelas do banco
}
