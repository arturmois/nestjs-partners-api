/*
  Warnings:

  - The values [available] on the enum `reservation_historys_status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `reservation_historys` MODIFY `status` ENUM('reserved', 'canceled') NOT NULL;
