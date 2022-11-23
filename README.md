# Getting Started with Create React App

1. Install pnpm
   npm install -g pnpm

2. Create a React project using create-react-app.
   pnpm create react-app pnpm-cra --template typescript

3. Delete node_modules, package-lock.json.

4. Install Packages using pnpm
   pnpm install
   There might've been an error like below.
   hint: If you want peer dependencies to be automatically installed, add "auto-install-peers=true" to an .npmrc file at the root of your project.
   hint: If you don't want pnpm to fail on peer dependency issues, add "strict-peer-dependencies=false" to an .npmrc file at the root of your project.
   Let's take the hint.

Create a file .npmrc and added auto-install-peers=true, then remove node_modules and reinstall packages pnpm install.

5. Run a dev server
   pnpm start
   In my case, there was another error.
   Property 'toBeInTheDocument' does not exist on type 'JestMatchers<HTMLElement>'.
   I don't know exactly why it did happen though, it could've been solved by installing a type package.
   pnpm add -D @types/testing-library\_\_jest-dom
