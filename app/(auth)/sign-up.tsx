import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import OAuth from "@/components/OAuth";
import { icons, images } from "@/constants";
import { Link, router } from "expo-router";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignUpPress = () => {};

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView className="flex-1 bg-white">
        <View className="flex-1 bg-white">
          <View className="relative w-full h-[200px]">
            <Image
              className="z-0 w-full h-[250px] "
              source={images.signUpCar}
            ></Image>
            <Text className="font-JakartaSemiBold text-2xl text-black bottom-14 left-5">
              Create Your Account
            </Text>
          </View>
          <View className="p-5">
            <InputField
              label="Name"
              placeholder="Enter your name"
              icon={icons.person}
              value={form.name}
              onChangeText={(text) => {
                setForm({ ...form, name: text });
              }}
            />
            <InputField
              label="Email"
              placeholder="Enter your email"
              icon={icons.email}
              value={form.email}
              onChangeText={(value) => {
                setForm({ ...form, email: value });
              }}
            />
            <InputField
              label="Password"
              placeholder="Enter your password"
              icon={icons.password}
              value={form.password}
              secureTextEntry={true}
              onChangeText={(value) => {
                setForm({ ...form, password: value });
              }}
            />
            <CustomButton
              title="Sign Up"
              onPress={onSignUpPress}
              className="mt-6"
            />

            <OAuth />

            <Link
              href="/sign-in"
              className="text-lg text-center text-general-200 mt-10"
            >
              <Text> Already have an account? </Text>
              <Text className="text-primary-500"> Log in </Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
