# Follow-up Quality Tasks

## Recently Completed
- ✅ Corrected the "Rubika Learning Tools" branding across metadata sources.
- ✅ Ensured the prompt template selector stays in sync with saved prompts.
- ✅ Aligned the dark-mode comment with the inline theme script.
- ✅ Added regression coverage for local-storage synchronization helpers.

## Next Ideas to Consider
1. **Improve library UX for long prompt titles**
   - Truncate or wrap long titles inside the Biblioteca drawer to avoid layout shifts on small screens.
   - Files: `src/pages/PrompterPage.tsx` (list markup and styles).
2. **Persist anti-sesgo toggle across sessions**
   - Mirror the existing `useLocalStorage` pattern used for templates so the anti-bias flag survives reloads.
   - Files: `src/pages/PrompterPage.tsx` (state management).
3. **Add integration coverage for prompt generation**
   - Create a high-level test that saves a prompt and reloads it to ensure the full flow works with the new synchronization helpers.
   - Files: consider a lightweight Node-based test harness under `hooks/__tests__` or a future UI test runner.
4. **Document the custom test workflow**
   - Expand the README with instructions for running the new TypeScript-to-Node test pipeline so contributors know why `npm test` now compiles to `dist-tests`.
   - Files: `README.md` (testing section).
