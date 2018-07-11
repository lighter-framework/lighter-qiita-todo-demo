<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function create (Request $request)
    {
        $name = $request->get('name');

        $task = new \App\Task;
        $task->order = \App\Task::all()->count();
        $task->name = $name;
        $task->is_finished = 0;
        $task->save();

        return \Lighter\Helper\Lesponse(true, [], 'Created the task.');
    }

    public function all ()
    {
        return \Lighter\Helper\Lesponse(true, \App\Task::all(), 'Getted all tasks.');
    }

    public function update (Request $request)
    {
        $task = \App\Task::find($request->get('id'));
        $task->name = $request->get('name');
        $task->is_finished = $request->get('is_finished');
        $task->save();

        return \Lighter\Helper\Lesponse(true, [], 'Saved the task.');
    }
}

