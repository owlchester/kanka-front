export function asyncCurrency() {
  const state = ref('USD');
  const isReady = ref(false);
  const isLoading = ref(false);
  const error = ref(undefined);
  const country = useCookie('front_currency');
  const euCodes = ['MX','BE','EL','LT','PT','BG','ES','LU','RO','CZ','FR','HU','SI','DK','HR','MT','SK','DE','IT','NL','FI','EE','CY','AT','SE','IE','LV','PL'];

  async function execute() {
    error.value = undefined;
    isReady.value = false;
    isLoading.value = true;

    try {
      isReady.value = true;

      const runtimeConfig = useRuntimeConfig().public
      if (country.value == 'USD' || country.value == 'EUR') {
        return;
      }
      const location = await $fetch(runtimeConfig.location, {
          headers: useRequestHeaders(['location'])
      });

      if (euCodes.includes(location.value.country)) {
        country.value = 'EUR';
      }
      country.value = 'USD';
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
    country,
  };
}