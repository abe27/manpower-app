<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEvaluatedsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('evaluateds', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('group_id');
            $table->uuid('emp_id');
            $table->integer('on_round')->nullable()->default(1);
            $table->date('on_date');
            $table->decimal('score', 8, 2)->nullable()->default(0);
            $table->longText('comment')->nullable()->default('-');
            $table->enum('is_accept', ['-', 'R', 'A']);
            $table->enum('is_status', ['-', 'N', 'P']);
            $table->timestamps();
            $table->foreign('group_id')->references('id')->on('evaluation_groups')->cascadeOnDelete();
            $table->foreign('emp_id')->references('id')->on('profiles')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('evaluateds');
    }
}
