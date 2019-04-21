<?php

Route::middleware(['auth:api'])->group(function () {
    Route::apiResources([
        'users' => 'UsersController',
    ]);

    Route::get(
        'search-user/{name}', 'UsersController@searchUser'
    );
});

