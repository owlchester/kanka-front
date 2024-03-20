export function asyncCurrency() {
  const state = ref('USD');
  const isReady = ref(false);
  const isLoading = ref(false);
  const error = ref(undefined);

  async function execute() {
    error.value = undefined;
    isReady.value = false;
    isLoading.value = true;

    try {
      isReady.value = true;

      const runtimeConfig = useRuntimeConfig().public
      const country = useCookie('front_currency');
      country.value = country.value || await $fetch(runtimeConfig.location, {
          headers: useRequestHeaders(['location'])
      });
      const euCodes = ['BE','EL','LT','PT','BG','ES','LU','RO','CZ','FR','HU','SI','DK','HR','MT','SK','DE','IT','NL','FI','EE','CY','AT','SE','IE','LV','PL'];
      
        if (euCodes.includes(country.value.country)) {
          state.value = 'EUR';
        }
        state.value = 'USD';
    }
    catch (e) {
      error.value = e;
    }
    isLoading.value = false;
  }

  execute();

  return {
    state,
    isReady,
    isLoading,
    error,
  };
}