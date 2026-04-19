import svelteConfig from './svelte.config.js';
import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import eslintConfigPrettier from 'eslint-config-prettier/flat';

export default defineConfig([
	globalIgnores([
		'**/.svelte-kit/**',
		'**/.vercel/**',
		'**/build/**',
		'**/package/**',
		'**/node_modules/**',
		'**/.DS_Store',
		'**/pnpm-lock.yaml',
		'**/package-lock.json',
		'**/yarn.lock',
		'**/.env',
		'**/.env.*',
		'!**/.env.example'
	]),
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs.recommended,
	eslintConfigPrettier,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: ts.parser,
				svelteConfig
			}
		}
	},
	{
		rules: {
			// Portfolio uses external https links and in-page hashes, not SvelteKit pathnames
			'svelte/no-navigation-without-resolve': 'off'
		}
	}
]);
