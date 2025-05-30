"use client";

import {
  NavigationContainer,
  LogoContainer,
  LogoImage,
  NavLink,
  NavLinksLeft,
  NavLinksRight,
} from "./navigation-bar.styles";
import CartIcon from "./cart-icon.component";
import CartDropdown from "./cart-dropdown.component";

import { useSelector, useDispatch } from "react-redux";
import { selectIsCartOpen } from "@/store/cart/cart.selector";
import { selectCurrentUser } from "@/store/user/user.selector";
import { signOut } from "@/store/user/user.thunk";
import { useParams, usePathname } from "next/navigation";

const PortalNavigationBar = ({ portal }) => {
  const { slug, name, logoUrl } = portal;
  const { accountSlug, portalSlug } = useParams();
  // const portalSlug = slug;
  // const accountSlug = accountId;
  const dispatch = useDispatch();
  const pathname = usePathname();
  const baseUrl = `/${accountSlug}/${portalSlug}`;

  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <>
      <NavigationContainer>
        <NavLinksLeft>
          <NavLink href={`${baseUrl}/shop`}>HOME</NavLink>
          <NavLink href={`${baseUrl}/shop/products`}>PRODUCTS</NavLink>
        </NavLinksLeft>

        <LogoContainer href={`${baseUrl}/shop`}>
          {logoUrl && (
            <LogoImage
              src={logoUrl}
              alt={`${name} logo`}
              width={100}
              height={100}
              priority
            />
          )}
        </LogoContainer>

        <NavLinksRight>
          {currentUser ? (
            <>
              <NavLink href={`/${slug}/profile`}>PROFILE</NavLink>
              <NavLink as="span" onClick={handleSignOut}>
                SIGN-OUT
              </NavLink>
            </>
          ) : (
            <NavLink href={`/auth?redirect=${encodeURIComponent(pathname)}`}>
              SIGN-IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinksRight>

        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
    </>
  );
};

export default PortalNavigationBar;
