export const addLocalstorage = (id) => {
   let newIds = [];

   const installedApps =
      JSON.parse(localStorage.getItem('installedApps')) || [];
   const isInstalled = installedApps.includes(id);

   if (!isInstalled) {
      newIds = [...installedApps, id];
      localStorage.setItem('installedApps', JSON.stringify(newIds));
   }
};

export const getIsInstalledApp = (id) => {
   const installedApps =
      JSON.parse(localStorage.getItem('installedApps')) || [];
   const isInstalled = installedApps.includes(id);

   if (isInstalled) {
      return true;
   } else {
      return false;
   }
};

export const getInstalledApps = () => {
   const installedApps =
      JSON.parse(localStorage.getItem('installedApps')) || [];
   return installedApps;
};

export const deleteInstalledApp = (id) => {
   const installedApps =
      JSON.parse(localStorage.getItem('installedApps')) || [];
   // console.log('all apps', installedApps);
   const remainingApps = installedApps.filter((appId) => appId !== id);
   // console.log('remaining apps', remainingApps);
   localStorage.setItem('installedApps', JSON.stringify(remainingApps));
};
