<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApproveAccidentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('approve_accidents', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('accident_id');
            $table->uuid('approve_by')->nullable();
            $table->enum('is_status', ['-', 'R', 'A'])->nullable()->default('-');//R=Reject,A=Approve
            $table->longText('remark')->nullable()->default('-');
            $table->enum('approve_level', [0, 1, 2, 3, 4])->nullable()->default(0);
            $table->timestamps();
            $table->foreign('accident_id')->references('id')->on('accidents')->cascadeOnDelete();
            $table->foreign('approve_by')->references('id')->on('profiles')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('approve_accidents');
    }
}
