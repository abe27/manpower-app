<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeeTesterDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employee_tester_details', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('emp_id');
            $table->uuid('squize_id');
            $table->uuid('answer_id');
            $table->boolean('is_status')->nullable()->default(false);
            $table->timestamps();
            $table->foreign('emp_id')->references('id')->on('employee_testers')->cascadeOnDelete();
            $table->foreign('squize_id')->references('id')->on('squizes')->cascadeOnDelete();
            $table->foreign('answer_id')->references('id')->on('squize_details')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employee_tester_details');
    }
}
