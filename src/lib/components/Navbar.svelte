<script lang="ts">import { Home, MessageCircle, User, TicketPercent, Boxes } from "lucide-svelte";
    import { FloatingNavbar } from "./ui/FloatingNavbar";
    const navItems = [
      {
        name: "Home",
        link: "/",
        icon: Home
      },
      {
        name: "Moduler",
        link: "/m15/0",
        icon: Boxes
      },
      {
        name: "Kom i gang",
        link: "/kjop",
        icon: TicketPercent
      }
    ];
    </script>
    
    <div class="relative w-full">
        
        <FloatingNavbar {navItems} />
       
    </div>