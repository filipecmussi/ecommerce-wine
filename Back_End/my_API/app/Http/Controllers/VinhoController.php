<?php

namespace App\Http\Controllers;

use App\Models\Vinho;
use Illuminate\Http\Request;

class VinhoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Vinho::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (Vinho::create($request->all())) {

            return response()->json([
                'message' => ' Vinho Cadastrado com sucesso '
            ], 201);
        }

        return response()->json([
            'message' => 'Erro ao adicionar o vinho'
        ], 404);
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $vinho
     * @return \Illuminate\Http\Response
     */
    public function show($vinho)
    {
        $vinho = Vinho::findOrFail($vinho);
        if ($vinho) {

            return $vinho;
        }

        return response()->json([
            'message' => 'Erro ao encontrar o vinho'
        ], 404);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $vinho
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $vinho)
    {
        $path = $request->capa->store('capa_vinhos', 'public');

        $vinho = Vinho::findOrFail($vinho);
        if ($vinho) {
            $vinho->capa = $path;

            if ($vinho->save()) {
                return $vinho;
            }

            return response()->json([
                'message' => 'Erro ao Atualizar o vinho'
            ], 404);
        }

        return response()->json([
            'message' => 'Erro ao Atualizar o vinho'
        ], 404);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $vinho
     * @return \Illuminate\Http\Response
     */
    public function destroy($vinho)
    {
        if (Vinho::destroy($vinho)) {
            return response()->json([
                'message' => ' Vinho Deletado com sucesso '
            ], 201);
        }

        return response()->json([
            'message' => ' Erro ao deletar o vinho '
        ], 404);;
    }
}
