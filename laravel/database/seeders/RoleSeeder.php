<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
         $admin = Role::firstOrCreate(['name' => 'admin']);
        $manager = Role::firstOrCreate(['name' => 'manager']);
        $staff = Role::firstOrCreate(['name' => 'staff']);

        $allPermissions = Permission::all();
        $productPermissions = Permission::where('name', 'like', 'products.%')->get();

        $admin->permissions()->sync($allPermissions);
        $manager->permissions()->sync($productPermissions);
        $staff->permissions()->sync([]);
    }
}
