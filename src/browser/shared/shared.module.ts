import { NgModule } from '@angular/core'
import { NodeEnvTransferModule } from '@flosportsinc/ng-env-transfer-state'
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common'
import { TransferHttpCacheModule } from '@nguniversal/common'
import { PlatformService } from './platform.service'

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TransferHttpCacheModule,
    NodeEnvTransferModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    TransferHttpCacheModule,
    NodeEnvTransferModule
  ],
  providers: [
    PlatformService
  ]
})
export class SharedModule { }