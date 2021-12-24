<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShiftsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shifts', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('title')->unique();/// A/B/C
            $table->longText('description')->nullable();
            $table->decimal('time_attendance', 8, 2)->nullable()->default(0);## จำนวนเวลาทำงาน(ชม.)
            $table->decimal('fee_per', 8, 2)->nullable()->default(0);## ค่ากะ
            $table->boolean('is_status')->nullable()->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shifts');
    }
}
