<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEvaluatedDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('evaluated_details', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('evaluate_id');
            $table->uuid('emp_id');
            $table->decimal('score', 8, 2)->nullable()->default(0);
            $table->longText('remark')->nullable()->default('-');
            $table->boolean('is_status')->nullable()->default(false);
            $table->timestamps();
            $table->foreign('evaluate_id')->references('id')->on('evaluations')->cascadeOnDelete();
            $table->foreign('emp_id')->references('id')->on('evaluateds')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('evaluated_details');
    }
}
