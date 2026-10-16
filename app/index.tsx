import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

import WelcomeHero from "../components/welcomehero";
import { Colors } from "../constants/colors";

// SPOTIBAI logo shown at the top-left
function BrandMark() {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={require("../assets/images/logos.png")}
        style={{
          width: 42,
          height: 42,
        }}
        resizeMode="contain"
        accessibilityLabel="SPOTIBAI logo"
      />

      <Text
        style={{
          fontSize: 18,
          fontWeight: "800",
          letterSpacing: 0.5,
          color: Colors.text,
          marginLeft: 12,
        }}
      >
        SPOTIBAI
      </Text>
    </View>
  );
}

export default function Welcome() {
  // State for the users name and input focus
  const [name, setName] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [hint, setHint] = useState("");

  // useEffect run after the Welcome screen mounts
  useEffect(() => {
    console.log("SPOTIBAI Welcome screen mounted");

    // Cleanup function runs when the screen component unmounts
    return () => {
      console.log("SPOTIBAI Welcome screen unmounted");
    };
  }, []);

  // 2 Layout on Tablets / Desktops, 1 Layout on Phones
  const { width } = useWindowDimensions();
  const isWide = width >= 768;

  const trimmed = name.trim();
  const isNameValid = trimmed.length >= 3;

  // useEffect with a dependency array: runs again every time `trimmed` changes.
  // It waits 600ms after the user stops typing, then checks the name.
  useEffect(() => {
    const timerId = setTimeout(() => {
      setHint(
        trimmed.length > 0 && trimmed.length < 3
          ? "Please enter at least 3 characters."
          : "",
      );
    }, 600);

    // Cleanup: cancel the previous timer on the next keystroke,
    // so the hint only appears after the user pauses.
    return () => clearTimeout(timerId);
  }, [trimmed]);

  // send the name to the dashboard as a route param
  const handleStart = () => {
    if (!isNameValid) return;

    router.push({
      pathname: "/dashboard",
      params: {
        name: trimmed,
      },
    });
  };

  // Welcome form
  const form = (
    <View
      style={{
        width: "100%",
        maxWidth: 440,
        alignSelf: "center",
      }}
    >
      <Text
        style={{
          fontSize: isWide ? 46 : 36,
          lineHeight: isWide ? 52 : 42,
          fontWeight: "800",
          color: Colors.text,
          marginTop: 18,
        }}
      >
        {"Welcome to\nSPOTIBAI Project"}
      </Text>

      <Text
        style={{
          fontSize: 16,
          color: Colors.muted,
          marginTop: 14,
        }}
      >
        Enter your name to get started
      </Text>

      {/* Name label */}
      <Text
        style={{
          fontSize: 13,
          fontWeight: "bold",
          color: Colors.text,
          marginTop: 28,
          marginBottom: 8,
        }}
      >
        Your name
      </Text>

      {/* Users name input*/}
      <TextInput
        placeholder="e.g. Gabriel Manco"
        placeholderTextColor={Colors.placeholder}
        value={name}
        onChangeText={setName}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onSubmitEditing={handleStart}
        autoCapitalize="words"
        autoCorrect={false}
        returnKeyType="done"
        accessibilityLabel="Your name"
        style={{
          width: "100%",
          height: 56,
          backgroundColor: Colors.white,
          borderWidth: isFocused ? 2 : 1.5,
          borderColor: isFocused
            ? Colors.inputBorderFocused
            : Colors.inputBorder,
          borderRadius: 14,
          paddingHorizontal: 18,
          fontSize: 16,
          color: Colors.text,
        }}
      />

      {/* Name validated hint */}
      {hint ? (
        <Text
          accessibilityRole="alert"
          style={{ color: "red", 
            fontSize: 12, 
            marginTop: 6 }}
        >
          {hint}
        </Text>
      ) : null}

      {/* Start Exploring button */}
      <TouchableOpacity
        activeOpacity={0.8}
        disabled={!isNameValid}
        onPress={handleStart}
        accessibilityRole="button"
        accessibilityLabel="Start exploring"
        style={{
          width: "100%",
          height: 56,
          backgroundColor: isNameValid
            ? Colors.primary
            : Colors.primaryDisabled,
          borderRadius: 14,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 14,
        }}
      >
        <Text
          style={{
            color: isNameValid ? Colors.white : Colors.onPrimaryDisabled,
            fontSize: 16,
            fontWeight: "bold",
            marginRight: 8,
          }}
        >
          Start Exploring
        </Text>

        <Ionicons
          name="arrow-forward"
          size={18}
          color={isNameValid ? Colors.white : Colors.onPrimaryDisabled}
        />
      </TouchableOpacity>

      {/* No account required and welcome message */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 14,
        }}
      >
        <Ionicons name="checkmark" size={14} color={Colors.pillText} />

        <Text
          style={{
            color: Colors.muted,
            fontSize: 13,
            marginLeft: 6,
          }}
        >
          {isNameValid
            ? `Ready when you are, ${trimmed}!`
            : "No account required!"}
        </Text>
      </View>
    </View>
  );

  // Footer
  const footer = (
    <Text
      style={{
        color: Colors.pillText,
        fontSize: 12,
        fontWeight: "bold",
      }}
    >
      SPOTIBAI • GROUP 2 in BSIT-4C
    </Text>
  );

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: Colors.background,
      }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {isWide ? (
        // TABLET / DESKTOP LAYOUT
        <View
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          {/* Left side: Logo, form, footer */}
          <View
            style={{
              flex: 1,
              padding: 48,
            }}
          >
            <BrandMark />

            <View
              style={{
                flex: 1,
                justifyContent: "center",
              }}
            >
              {form}
            </View>

            {footer}
          </View>

          {/* Right side: Hero panel */}
          <View
            style={{
              flex: 1,
              padding: 16,
            }}
          >
            <WelcomeHero name={name} />
          </View>
        </View>
      ) : (
        // PHONE LAYOUT
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 20,
            paddingTop: 40,
            paddingBottom: 20,
          }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Actual SPOTIBAI logo */}
          <BrandMark />

          {/* Compact hero */}
          <View
            style={{
              marginTop: 20,
            }}
          >
            <WelcomeHero name={name} compact />
          </View>

          {/* Form */}
          <View
            style={{
              width: "100%",
              marginTop: 28,
            }}
          >
            {form}
          </View>

          {/* Footer */}
          <View
            style={{
              marginTop: "auto",
              paddingTop: 28,
              alignItems: "center",
            }}
          >
            {footer}
          </View>
        </ScrollView>
      )}
    </KeyboardAvoidingView>
  );
}
