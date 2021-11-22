export default function clearCacheData()
{
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
};