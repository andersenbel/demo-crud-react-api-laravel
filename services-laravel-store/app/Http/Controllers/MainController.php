<?php

namespace App\Http\Controllers;

use App\Http\Resources\RoomResource;
use App\Models\Bookings;
use App\Models\Room;
use Illuminate\Http\Request;
use Illuminate\Pagination\Paginator;
use Illuminate\Http\v;
use Validator;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class MainController extends Controller {
    public function main() {
        return view('layout');
    }
}
