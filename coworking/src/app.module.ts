import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkspaceModule } from './workspace/workspace.module';
import { RoomModule } from './room/room.module';
import { SessionModule } from './session/session.module';
import { ReservationModule } from './reservation/reservation.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './user/entities/user.entity'
import { Room } from './room/entities/room.entity'
import { Reservation } from './reservation/entities/reservation.entity'
import { Workspace } from './workspace/entities/workspace.entity'
import { Session } from './session/entities/session.entity'


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432'),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [Users, Workspace, Room, Reservation, Session],
      synchronize: false,
      autoLoadEntities: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    }),
    WorkspaceModule, RoomModule, SessionModule, ReservationModule, UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }



// @Module({
//   imports: [
//     ConfigModule.forRoot({ isGlobal: true }),
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: process.env.DB_HOST,
//       port: parseInt(process.env.DB_PORT || '5432'),
//       username: process.env.DB_USER,
//       password: process.env.DB_PASS,
//       database: process.env.DB_NAME,
//       entities: [Users, Workspace, Reservation, Session,Room],
//       synchronize: true,
//       extra: {
//         ssl: {
//           rejectUnauthorized: false,
//         },
//       },
//     }), ReservationModule, RoomModule, WorkspaceModule, SessionModule, UserModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
