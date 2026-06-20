import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { BookingProvider } from "@/contexts/BookingContext";
import Index from "./pages/Index.tsx";
import Editorial from "./pages/Editorial.tsx";
import NotFound from "./pages/NotFound.tsx";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import TrouwpakOpMaat from "./pages/wedding/TrouwpakOpMaat";
import CostumeMariageSurMesure from "./pages/wedding/CostumeMariageSurMesure";
import CustomWeddingSuits from "./pages/wedding/CustomWeddingSuits";
import MaatpakOpMaat from "./pages/suits/MaatpakOpMaat";
import CostumeSurMesure from "./pages/suits/CostumeSurMesure";
import BespokeSuits from "./pages/suits/BespokeSuits";
import CityPage from "./pages/suits/CityPage";
import About from "./pages/About";
import Legal from "./pages/Legal";
import WhatsAppFab from "./components/WhatsAppFab";
import BespokePromoPopup from "./components/BespokePromoPopup";
import ComingSoon from "./pages/ComingSoon";
import Zakelijk from "./pages/Zakelijk";
import Lidmaatschap from "./pages/Lidmaatschap";
import ShopProduct from "./pages/ShopProduct";
import Collectie from "./pages/Collectie";
import HemdenOpMaat from "./pages/HemdenOpMaat";
import Maatpak from "./pages/Maatpak";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <BookingProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/editorial" element={<Editorial />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/trouwpak-op-maat" element={<TrouwpakOpMaat />} />
              <Route path="/costume-mariage-sur-mesure" element={<CostumeMariageSurMesure />} />
              <Route path="/custom-wedding-suits" element={<CustomWeddingSuits />} />
              <Route path="/maatpak-op-maat" element={<MaatpakOpMaat />} />
              <Route path="/costume-sur-mesure" element={<CostumeSurMesure />} />
              <Route path="/bespoke-suits" element={<BespokeSuits />} />
              <Route path="/maatpak/:city" element={<CityPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/over-ons" element={<About />} />
              <Route path="/a-propos" element={<About />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/juridisch" element={<Legal />} />
              <Route path="/mentions-legales" element={<Legal />} />
              <Route path="/fr/binnenkort" element={<ComingSoon />} />
              <Route path="/zakelijk" element={<Zakelijk />} />
              <Route path="/lidmaatschap" element={<Lidmaatschap />} />
              <Route path="/hemden-op-maat" element={<HemdenOpMaat />} />
              <Route path="/collectie" element={<Collectie />} />
              <Route path="/maatpak" element={<Maatpak />} />
              <Route path="/journaal" element={<Blog />} />
              <Route path="/shop/:slug" element={<ShopProduct />} />
              <Route path="/coming-soon/:slug" element={<ComingSoon />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <WhatsAppFab />
            <BespokePromoPopup />
          </BookingProvider>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
