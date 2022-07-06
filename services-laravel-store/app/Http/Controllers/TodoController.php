<?php

namespace App\Http\Controllers;

use App\Http\Resources\TodoResource;
use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class TodoController extends Controller {
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        return TodoResource::collection(Todo::all()->sortByDesc("id"));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request) {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        $rules = [
            'name' => 'required|max:100',
            'description' => 'required|max:100',
        ];

        $validate =  Validator::make($request->all(), $rules, []);
        if ($validate->fails()) {
            return response()->json(['error' => 'Error input']);
        }
        $name = $request->input('name');
        $description = $request->input('description');
        $data = array('name' => $name, "description" => $description);
        DB::table('todos')->insert($data);
        return response()->json(['ok']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function show(Todo $todo, $id) {
        return DB::table('todos')->where('id', $id)->get();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function edit(Todo $todo) {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Todo $todo) {
        $rules = [
            'name' => 'required|max:100',
            'description' => 'required|max:100',
        ];

        $validate =  Validator::make($request->all(), $rules, []);
        if ($validate->fails()) {
            return response()->json(['error' => 'Error input']);
        }
        $name = $request->input('name');
        $description = $request->input('description');
        $data = array('name' => $name, "description" => $description);
        DB::table('todos')->where('id', $request->input('id'))->update($data);
        return response()->json(['ok']);
    }



    public function delete(Request $request, Todo $todo) {
        DB::table('todos')->where('id', $request->input('id'))->delete();
        return response()->json(['ok']);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Todo $todo) {
        //
    }
}
