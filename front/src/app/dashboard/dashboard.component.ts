import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-background flex flex-col items-center justify-center gap-6">
      <h1 class="font-headline-xl text-3xl text-primary font-bold">
        Bienvenido, {{ auth.usuarioActual()?.nombre }}
      </h1>
      <p class="font-body-md text-on-surface-variant">
        Rol: {{ auth.usuarioActual()?.rol }}
      </p>
      <button
        (click)="auth.logout()"
        class="bg-secondary-container hover:bg-secondary text-on-secondary font-headline-md px-6 py-3 rounded-xl"
      >
        Cerrar sesión
      </button>
    </div>
  `,
})
export class DashboardComponent {
  constructor(public auth: AuthService) {}
}
