import { Module } from '@nestjs/common';
import { MsgBrokerOpsService } from './msg-broker-ops.service';

@Module({
  providers: [MsgBrokerOpsService]
})
export class MsgBrokerOpsModule {}
