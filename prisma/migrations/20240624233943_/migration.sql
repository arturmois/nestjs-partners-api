/*
  Warnings:

  - A unique constraint covering the columns `[event_id]` on the table `spots` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE `tickets` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `ticket_kind` ENUM('full', 'half') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `spot_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tickets_spot_id_key`(`spot_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reservation_historys` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `ticket_kind` ENUM('full', 'half') NOT NULL,
    `status` ENUM('available', 'reserved') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `spot_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `reservation_historys_spot_id_key`(`spot_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `spots_event_id_key` ON `spots`(`event_id`);

-- AddForeignKey
ALTER TABLE `tickets` ADD CONSTRAINT `tickets_spot_id_fkey` FOREIGN KEY (`spot_id`) REFERENCES `spots`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reservation_historys` ADD CONSTRAINT `reservation_historys_spot_id_fkey` FOREIGN KEY (`spot_id`) REFERENCES `spots`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
