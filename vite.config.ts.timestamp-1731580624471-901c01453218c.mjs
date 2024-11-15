// vite.config.ts
import { vitePlugin as remix } from "file:///C:/projects/my-remix-app/my-turborepo/node_modules/@remix-run/dev/dist/index.js";
import { defineConfig } from "file:///C:/projects/my-remix-app/my-turborepo/node_modules/vite/dist/node/index.js";
import { flatRoutes } from "file:///C:/projects/my-remix-app/my-turborepo/node_modules/remix-flat-routes/dist/index.js";
import tsconfigPaths from "file:///C:/projects/my-remix-app/my-turborepo/node_modules/vite-tsconfig-paths/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true
      },
      routes: async (defineRoutes) => {
        return flatRoutes("routes", defineRoutes, {
          ignoredRouteFiles: [
            ".*",
            "**/*.css",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__*.*",
            "**/*.server.*",
            "**/*.client.*"
          ]
        });
      }
    }),
    tsconfigPaths()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxwcm9qZWN0c1xcXFxteS1yZW1peC1hcHBcXFxcbXktdHVyYm9yZXBvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxwcm9qZWN0c1xcXFxteS1yZW1peC1hcHBcXFxcbXktdHVyYm9yZXBvXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9wcm9qZWN0cy9teS1yZW1peC1hcHAvbXktdHVyYm9yZXBvL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgdml0ZVBsdWdpbiBhcyByZW1peCB9IGZyb20gXCJAcmVtaXgtcnVuL2RldlwiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB7IGZsYXRSb3V0ZXMgfSBmcm9tIFwicmVtaXgtZmxhdC1yb3V0ZXNcIjtcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZW1peCh7XG4gICAgICBmdXR1cmU6IHtcbiAgICAgICAgdjNfZmV0Y2hlclBlcnNpc3Q6IHRydWUsXG4gICAgICAgIHYzX3JlbGF0aXZlU3BsYXRQYXRoOiB0cnVlLFxuICAgICAgICB2M190aHJvd0Fib3J0UmVhc29uOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHJvdXRlczogYXN5bmMgKGRlZmluZVJvdXRlcykgPT4ge1xuICAgICAgICByZXR1cm4gZmxhdFJvdXRlcyhcInJvdXRlc1wiLCBkZWZpbmVSb3V0ZXMsIHtcbiAgICAgICAgICBpZ25vcmVkUm91dGVGaWxlczogW1xuICAgICAgICAgICAgXCIuKlwiLFxuICAgICAgICAgICAgXCIqKi8qLmNzc1wiLFxuICAgICAgICAgICAgXCIqKi8qLnRlc3Que2pzLGpzeCx0cyx0c3h9XCIsXG4gICAgICAgICAgICBcIioqL19fKi4qXCIsXG4gICAgICAgICAgICBcIioqLyouc2VydmVyLipcIixcbiAgICAgICAgICAgIFwiKiovKi5jbGllbnQuKlwiLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9KSxcbiAgICB0c2NvbmZpZ1BhdGhzKCksXG4gIF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVMsU0FBUyxjQUFjLGFBQWE7QUFDN1UsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyxrQkFBa0I7QUFDM0IsT0FBTyxtQkFBbUI7QUFFMUIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLE1BQ0osUUFBUTtBQUFBLFFBQ04sbUJBQW1CO0FBQUEsUUFDbkIsc0JBQXNCO0FBQUEsUUFDdEIscUJBQXFCO0FBQUEsTUFDdkI7QUFBQSxNQUNBLFFBQVEsT0FBTyxpQkFBaUI7QUFDOUIsZUFBTyxXQUFXLFVBQVUsY0FBYztBQUFBLFVBQ3hDLG1CQUFtQjtBQUFBLFlBQ2pCO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRixDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBLEVBQ2hCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
