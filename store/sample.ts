import { Action, Module, VuexModule } from 'vuex-module-decorators'

@Module({ name: 'sample', stateFactory: true, namespaced: true })
export default class SampleModule extends VuexModule {
  @Action({ rawError: true })
  async throwsAsync(): Promise<void> {
    throw new Error('From async action.')
  }

  @Action({ rawError: true })
  throwsSync(): void {
    throw new Error('From sync action.')
  }
}
